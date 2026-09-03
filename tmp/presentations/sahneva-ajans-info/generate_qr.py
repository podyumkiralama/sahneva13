from pathlib import Path

from reportlab.graphics import renderSVG
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing


OUTPUT_DIR = Path(__file__).resolve().parent / "assets" / "qr"

TARGETS = {
    "video-01-sifir-atik.svg": "https://www.youtube.com/watch?v=z4DqZERYXkM",
    "video-02-saha-2026.svg": "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    "video-03-teknofest-dekor.svg": "https://www.youtube.com/shorts/7yjrrEtWrr0",
    "video-04-teknofest-sahne.svg": "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    "video-05-pubg-final.svg": "https://www.youtube.com/watch?v=173gBurWSRQ",
    "video-06-eaaci-led.svg": "https://youtube.com/shorts/qiqiBN4Uhu4",
    "contact.svg": "https://www.sahneva.com/iletisim",
}


def write_qr(output_path: Path, url: str) -> None:
    qr = QrCodeWidget(url)
    x0, y0, x1, y1 = qr.getBounds()
    width = x1 - x0
    height = y1 - y0
    drawing = Drawing(
        240,
        240,
        transform=[220 / width, 0, 0, 220 / height, 10, 10],
    )
    drawing.add(qr)
    renderSVG.drawToFile(drawing, str(output_path))


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for filename, url in TARGETS.items():
        write_qr(OUTPUT_DIR / filename, url)


if __name__ == "__main__":
    main()
