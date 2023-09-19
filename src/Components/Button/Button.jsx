export default function ButtonComponent({ className, label }) {
    return (
        <button class={`${className}`}>
            {label}
        </button>
    );
}
