import AboutContent from "@/components/AboutContent";
import Link from "next/link";


const AboutPage = () => {

    
    return (
        <div className="pt-28">
            {/* <AboutContent></AboutContent> */}

            <Link href='about/history'>History</Link>
            <Link href='about/mission'>Mission</Link>
        </div>
    );
};

export default AboutPage;