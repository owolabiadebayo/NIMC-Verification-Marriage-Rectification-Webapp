import fastapi
from typing import List, Dict, Tuple, Union
from fastapi import FastAPI, HTTPException,  status, Depends, Request
from pydantic import BaseModel
from database.connection import get_session
from database.connection import conn
from fastapi.responses import JSONResponse
from models.models import User

app = FastAPI(
    title="API NIMC",
    description="NIMC Verification Marriage Rectification",
    verion="1.0",
    contact={
        "name":"Daniel Adama",
        "email":"adamadaniel321@gmail.com"
    }
)

@app.on_event("startup")
def on_startup():
    conn()

@app.post("/api/v1/users")
async def create_user(
    user: User,
    session=Depends(get_session)
    ) -> Dict:

    if not user:
        raise HTTPException(
            status_code=status.HTTP_406_NOT_ACCEPTABLE,
            detail="Incomplete user information"
        )
    
    session.add(user)
    session.commit()
    session.refresh(user)

    return JSONResponse(
            {
            "BaseResponse": {
                "Status": True,
                "Message": "Operation successfully"
            }
        },
        status_code=status.HTTP_201_CREATED
        )

# @app.get("/api/v1/users", response_model=List[User])
# async def retrieve_all_events(
#     session=Depends(get_session)
#     ) -> List[User]:

#     users = session.query(User).all()
#     return users