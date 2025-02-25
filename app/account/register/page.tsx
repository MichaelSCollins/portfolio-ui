/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCMS } from "@/hooks/useCMS";
import { createAccountAction } from "./action";
import CMSForm from "@/components/form/form";
import HeroImageLayout from "@/components/layouts/HeroImageLayout";
import PortfolioPage from "@/lib/enums/PortfolioPage";
import ImageItem from "@/lib/interfaces/ImageData";
import UILayers from "@/components/layers/UILayers";
const page = PortfolioPage.LOGIN
const LoginPage = () => {
    const { getObj } = useCMS();
    const image = getObj<ImageItem>('register.heromage')
    return (
        <section
            className={`
                px-10
                mt-12
                w-full
                h-full
                flex
                flex-col
                justify-center
            `}
        >
            <UILayers
                // bgSymbols={bgSymbols}
                page={page} >
                <HeroImageLayout
                    {...{ title: "Sign up", subtitle: "To gain access.", image, page }}
                >
                    <CMSForm moduleKey={"register"}
                        action={createAccountAction} />
                </HeroImageLayout>
            </UILayers>
        </section>
    );
};

export default LoginPage;
