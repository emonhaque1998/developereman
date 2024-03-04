import { motion } from "framer-motion";

export default function HomeLayout({ children }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="developer-background">{children}</div>
            </motion.div>
        </>
    );
}
