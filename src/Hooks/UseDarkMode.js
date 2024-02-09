export const UseDarkMode = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
        document.body.classList.add("darkMode");
        } else {
        document.body.classList.remove("darkMode");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };
  return { darkMode, toggleDarkMode };
}
