// src/lib/pdf-config.ts (새 파일 생성)
import { pdfjs } from "react-pdf";

// 로컬 worker 파일 사용 (더 안정적)
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();
}

export { pdfjs };
