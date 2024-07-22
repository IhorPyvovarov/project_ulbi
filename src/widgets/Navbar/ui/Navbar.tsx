import { classNames } from "shared/lib/ClassNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.Links}>
            <AppLink 
                to={'/'} 
                className={cls.mainLink}
                theme={AppLinkTheme.SECONDARY}
            >Main page</AppLink>
            <AppLink 
                to={'/about'}
                theme={AppLinkTheme.SECONDARY}
            >About page</AppLink>
        </div>
    </nav>
  )
}