import Image from "next/image";

export default function Header() {
  return (
    <>
      <div style={{ borderRadius: "50%", overflow: "hidden" }}>
        <Image
          src="/images/profile.jpeg" // Route of the image file
          height={180} // Desired size with correct aspect ratio
          width={180} // Desired size with correct aspect ratio
          alt="Yusuf Sina Yildiz"
        />
      </div>
      <h1 className="title">Yusuf Sina Yıldız</h1>
      <h2 className="sub-title text-secondary">Yazılım Geliştirici</h2>
    </>
  );
}
