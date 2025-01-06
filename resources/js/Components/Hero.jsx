export default function Hero() {
    return (
        <div className="flex flex-row items-center py-10 bg-[url('./assets/images/Background.png')]">
            <div className="w-1/2 text-6xl font-bold">
                <h2>Hi 👋,</h2>
                <h2>
                    My name is{" "}
                    <span className="font-extrabold text-sky-600">
                        Pavan MG
                    </span>
                </h2>
                <h2>I build things for web</h2>
            </div>
            <div className="w-1/2 flex justify-center">
                <img
                    src="./assets/images/hero_image.jpg"
                    alt=""
                    className="w-1/2 rounded-full"
                />
            </div>
        </div>
    );
}
