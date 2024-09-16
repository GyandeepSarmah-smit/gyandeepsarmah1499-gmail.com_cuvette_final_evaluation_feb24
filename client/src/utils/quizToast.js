import toast from "react-hot-toast";

const toastSuccess = () => {
    toast.success("Copied quiz link to clipboard", {
        duration: 2000,
        position: 'top-right',
        iconTheme: {
            primary: 'rgb(16, 211, 16)',
            secondary: '#fff',
        },
    style: {
        padding: "1rem"
    }});
}

export const shareLink = (id) => {
    navigator.clipboard.writeText(`https://gyandeepsarmah1499-gmail-com-cuvette-final-evaluation-feb24.vercel.app/quizzes/play/${id}`);
    toastSuccess();
}