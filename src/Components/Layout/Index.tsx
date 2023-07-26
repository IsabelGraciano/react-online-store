import { layoutProps } from "../../Types/PropTypes"

const Layout = ({children}: layoutProps): JSX.Element => {
    return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )
}

export default Layout