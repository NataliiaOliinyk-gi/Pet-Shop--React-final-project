
import styles from './RemoveIcon.module.css';

const RemoveIcon = (props) => (
  <svg
    className={styles.removeIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#282828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18M6 6l12 12"
    />
  </svg>
)
export default RemoveIcon;