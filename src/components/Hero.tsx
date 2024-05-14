import siteMetadata from "@/data/siteMetadata";
import { socialMedia } from "@/data/socialMedia";
import Link from "next/link";
import { Button, ShimmerButton } from "./ui/button";

function Hero() {
    return (
        <div className="flex max-w-lg flex-col gap-8">
            <section className="flex flex-col gap-2">
                <h2 className="text-gradient bg-gradient-to-r from-teal-500 to-teal-800 text-3xl font-bold box-decoration-clone py-2 md:text-4xl">Rafa Al Razzak</h2>

                <p className="text-primary-400 text-sm md:text-base">{siteMetadata.SELF_DESCRIPTION}</p>
                <div className="flex gap-2">
                    {socialMedia.map((socialMedia, index) => (
                        <Link key={index} href={socialMedia.url}>
                            <Button key={socialMedia.name} className=" text-white" size="icon">
                                <socialMedia.icon className="size-4 fill-current" />
                            </Button>
                        </Link>
                    ))}
                </div>
            </section>

            <Link href="/cv" className="w-fit">
                <ShimmerButton background="rgb(18, 139, 128)">Read CV</ShimmerButton>
            </Link>
        </div>
    );
}

export default Hero;
