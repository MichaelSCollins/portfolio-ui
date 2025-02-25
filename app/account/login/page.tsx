import { useCMS } from "@/hooks/useCMS";
import { loginAction } from "./action";
import CMSForm from "@/components/form/form";
import HeroImageLayout from "@/components/layouts/HeroImageLayout";

import ImageItem from "@/lib/interfaces/ImageItem";
import PortfolioPage from "@/lib/enums/PortfolioPage";
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
                    {...{ title: "Login", subtitle: "To access your projects.", image, page }}
                >
                    <CMSForm moduleKey={"login"}
                        action={loginAction}
                        defaultValues={{}} />
                </HeroImageLayout>
            </UILayers>
        </section>
    );
};

export default LoginPage;
