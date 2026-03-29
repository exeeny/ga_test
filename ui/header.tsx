import Link from "next/link";
import { Button } from "./components/auth-button";

export const Header = () => (
    <header className='flex items-center justify-between bg-gray-200 p-4' >
        <Link href="/" className="nav-link">Home</Link>
        <div className="flex gap-2 items-center">
            <Link href="/user" className="nav-link">User</Link>
            <Link href="/settings" className="nav-link">Settings</Link>
            <Button />
        </div>
        
    </header>
)