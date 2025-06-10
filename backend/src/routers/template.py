from fastapi import APIRouter
from fastapi.responses import FileResponse

from src.template_files import (LINUX_TEMPLATE_PATH,
                                WINDOWS_TEMPLATE_PATH,
                                TEMPLATE_FILENAME)

MEDIA_TYPE = "application/octet-stream"

router = APIRouter(prefix="/api/template", tags=["Items"])


@router.get("/windows/download")
async def get_template() -> FileResponse:
    return FileResponse(
        path=WINDOWS_TEMPLATE_PATH,
        media_type=MEDIA_TYPE,
        filename=TEMPLATE_FILENAME,
    )


@router.get("/linux/download")
async def get_template() -> FileResponse:
    return FileResponse(
        path=LINUX_TEMPLATE_PATH,
        media_type=MEDIA_TYPE,
        filename=TEMPLATE_FILENAME
    )
