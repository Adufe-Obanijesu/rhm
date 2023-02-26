const Hero = ({title, text, buttonName}) => {

    const background = {
        background: "url(/img/hero.jpg)",
        width: "100%",
        height: "450px"
    }

    return (
        <section style={background} className="flex justify-center items-center">
            <div className="w-3/4 md:w-1/2">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-black tracking-wide uppercase text-center leading-tight mb-2">{title}</h1>
                <div className="flex justify-center">
                    <p className="greyParagraph text-md mb-4 text-center text-sm lg:text-base">
                        {text}
                    </p>
                </div>
                { buttonName && (
                <div className="flex justify-center">
                    <button className="button transitionItem md:text-base text-xs">{buttonName}</button>
                </div>
                )}
            </div>
            
        </section>
    )
}

export default Hero;