from  sqlmodel import Field, SQLModel, Session, JSON, Column


class User(BaseModel):
    name: str
    newName: str
    affidavit: str
    publication: str
    persons: str
    transactionId: str

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "newName": "Job Doe",
                "affidavit":"job.jpeg",
                "publication":"Publication",
                "persons":"James"
            }
        }