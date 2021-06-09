import styles from './index.module.css'

export default function Nav() {
    return (
        <div>
            <nav className={styles.nav}>
                <div className="flex items-center flex-no-shrink text-gray-200 mr-6">
                    <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"> </svg>
                    <span className="font-semibold text-xl tracking-tight">Lean Exo</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4">
                            Docs
</a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4">
                            Examples
</a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500">
                            Blog
</a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-gray-500 hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Sign in with Google</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
