import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Logo, EyeIcon, CheckBoxIcon } from "../../../assets/icons/loginIcons";
import styles from "./styles.module.css";

const Login = () => {
    const tabs = [
        {
            id: 0,
            title: "Building the Future...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 1,
            title: "Innovating for Tomorrow...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            id: 2,
            title: "Shaping a Better World...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (rememberMe) {
            localStorage.setItem("email", data.email);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [tabs.length]);

    const switchTab = (newTabIndex) => {
        setActiveTab(newTabIndex);
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.leftSideContent}>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <h1>{tabs[activeTab].title}</h1>
                        <p>{tabs[activeTab].description}</p>
                    </div>
                </div>
                <div className={styles.lines}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`${styles.line} ${tab.id === activeTab ? styles.activeLine : ""}`}
                            onClick={() => switchTab(tab.id)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.rightSideContent}>
                    <div className={styles.rightSideContentHeader}>
                        <p>WELCOME BACK</p>
                        <h2>Log In to your Account</h2>
                    </div>
                    <form className={styles.rightSideContentForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.rightSideContentFormInput}>
                            <label>Email</label>
                            <input
                                type="text"
                                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                            />
                            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                        </div>
                        <div className={styles.rightSideContentFormInput}>
                            <label>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            />
                            <div className={styles.rightSideContentFormInputEye} onClick={() => setShowPassword(!showPassword)}>
                                <EyeIcon />
                            </div>
                            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
                        </div>
                        <div className={styles.rightSideContentFormCheckboxContainer}>
                            <div className={styles.rightSideContentFormCheckbox} onClick={() => setRememberMe(!rememberMe)}>
                                <div className={styles.rightSideCheckBox} style={rememberMe ? { backgroundColor: "#E0E0E0", border: "none" } : { backgroundColor: "#FAFAFA" }} readOnly>
                                    <div className={styles.rightSideContentFormCheckboxIcon} style={{ display: rememberMe ? "block" : "none" }}>
                                        <CheckBoxIcon />
                                    </div>
                                </div>
                                <p>Remember me</p>
                            </div>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className={styles.rightSideContentFormButton}>
                            <button type="submit">CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
