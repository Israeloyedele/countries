import { motion } from "framer-motion";
export function Footer() {
    return (
        <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 }, y: -2 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 }}}
            className="footer">
             <a href="https://israeloyedele.com" target="_blank">&copy; 2026 Israel Oyedele</a>
        </motion.div>
    )
}