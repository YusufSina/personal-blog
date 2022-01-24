import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Header() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <div className="d-flex justify-content-center">
        <Image
          src="/images/profile.jpeg" // Route of the image file
          height={180} // Desired size with correct aspect ratio
          width={180} // Desired size with correct aspect ratio
          alt="Yusuf Sina Yildiz"
          layout="fixed"
        />
      </div>
      <h1 className="title mt-3 text-center">Yusuf Sina Yıldız</h1>
      <div className="sub-title fw-lighter text-center">
        {t("Software Developer")}
      </div>
      <div className="fw-lighter mb-3 text-center">
        yusufsinayildiz [at] gmail.com
      </div>
      <div className="d-flex justify-content-around my-1">
        <div>
          <Link href="/">
            <a>{t("About")}</a>
          </Link>
        </div>

        <div>
          <Link href="/blog">
            <a>{t("Blog")}</a>
          </Link>
        </div>
        <div>
          <Link href="/resume">
            <a>{t("Resume")}</a>
          </Link>
        </div>
  </div>
    </>
  );
}
