import World from "./World";
import "./Hello.css";
import styles from "./Hello.module.css"

export default function Hello() {
    return (
        <>
            <h1 style={{
                color: '#f00',
                borderRight: '2px solid #000',
                marginBottom: '30px',
                opacity: 1,
            }}
            >
                Hello
            </h1>
            <div className="box">
                Hello
            </div>
            <div className={styles.box}>
                Hello
            </div>
        </>
    )
}
