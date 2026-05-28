export default function CadirKiralamaLayout({ children }) {
  return (
    <>
      {children}
      <style>{`
        #stok-kapasitesi > div > div > div:first-child > div {
          position: relative;
          overflow: hidden;
          background: rgba(2, 6, 23, 0.88) !important;
          border-color: rgba(165, 243, 252, 0.24) !important;
          box-shadow: 0 28px 90px rgba(8, 145, 178, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
        }

        #stok-kapasitesi > div > div > div:first-child > div::before,
        #stok-kapasitesi > div > div > div:first-child > div::after {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: 9999px;
          filter: blur(56px);
          z-index: 0;
        }

        #stok-kapasitesi > div > div > div:first-child > div::before {
          left: -5rem;
          top: -5rem;
          width: 14rem;
          height: 14rem;
          background: rgba(34, 211, 238, 0.12);
        }

        #stok-kapasitesi > div > div > div:first-child > div::after {
          right: -5rem;
          bottom: -6rem;
          width: 16rem;
          height: 16rem;
          background: rgba(59, 130, 246, 0.12);
        }

        #stok-kapasitesi > div > div > div:first-child > div > * {
          position: relative;
          z-index: 1;
        }

        #stok-kapasitesi > div > div > div:first-child > div p {
          color: rgb(226, 232, 240) !important;
          font-weight: 500;
          line-height: 2rem;
        }

        #stok-kapasitesi > div > div > div:first-child > div a {
          color: rgb(255, 255, 255) !important;
          text-decoration-color: rgba(103, 232, 249, 0.72) !important;
          text-shadow: 0 0 18px rgba(34, 211, 238, 0.22);
        }

        #stok-kapasitesi > div > div > div:first-child > div a:hover {
          color: rgb(165, 243, 252) !important;
        }

        #stok-kapasitesi article {
          background: rgba(2, 6, 23, 0.72) !important;
          border-color: rgba(207, 250, 254, 0.16) !important;
          box-shadow: 0 22px 70px rgba(8, 145, 178, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.07) !important;
        }

        #stok-kapasitesi article > p:first-child {
          color: rgb(207, 250, 254) !important;
        }

        #stok-kapasitesi article > p:last-child {
          color: rgb(226, 232, 240) !important;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
