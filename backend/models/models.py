from  sqlmodel import Field, SQLModel, Session, JSON, Column
from typing import List, Optional


class User(SQLModel, table=True):
    id: Optional[int] = Field(
        default=None,
        primary_key=True
    )
    name: str
    newName: str
    affidavit: str
    publication: int
    persons: str
    transactionId: str

    class Config:
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "name": "John Doe",
                "newName": "Job Doe",
                "affidavit":"job.jpeg",
                "publication":6000,
                "persons":"Others",
                "transactionId":"owjieofjeiowdmdsivsdimvsidvsdo"
            }
        }