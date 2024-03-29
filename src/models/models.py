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
    publication: str
    persons: List[str] = Field(sa_column=Column(JSON))
    transactionId: str

    class Config:
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "name": "John Doe",
                "newName": "Job Doe",
                "affidavit":"job.jpeg",
                "publication":"Publication",
                "persons":["James","Adeleke","Eleojo"],
                "transactionId":"owjieofjeiowdmdsivsdimvsidvsdo"
            }
        }