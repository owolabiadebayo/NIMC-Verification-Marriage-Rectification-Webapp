import fastapi
from typing import List, Dict, Tuple, Union
from fastapi import FastAPI, HTTPException,  status
from pydantic import BaseModel
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post("/api/v1/users")
async def create_user(
    user:User
    ) -> Dict:

    if user:

        return JSONResponse(
            {
            "BaseResponse": {
                "Status": True,
                "Message": "Operation successfully"
            }
        },
        status_code=status.HTTP_201_CREATED
        )
    
    raise HTTPException(
            status_code=status.HTTP_406_NOT_ACCEPTABLE,
            detail="Incomplete user information"
        )