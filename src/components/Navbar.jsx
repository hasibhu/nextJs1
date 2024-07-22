'use client' //explanation 76.5 7:30min.
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {

    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Blogs",
            path: '/blogs'
        }
    ]

    const loginHandler = () => {
        router.push('/login')
    }

    return (
        <nav className="bg-blue-400 flex justify-between items-center px-6 py-4 text-2xl fixed w-full opacity-70 ">
            <h4 className="font-bold">Hasib</h4>
            <ul className="flex justify-center items-center space-x-4">
                <li>
                    {
                        links?.map((item) => <Link className={`${pathName === item.path && "text-red-800" }`}
                            key={item.path} href={item.path}> {item.title}</Link>)

                    }
                </li>
            </ul>
            <button onClick={loginHandler} className="btn btn-primary">Login</button>
        </nav>

    );
};

export default Navbar;

