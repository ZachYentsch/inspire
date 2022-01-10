export async function confirmation(title = "Are you Sure?", text = "You won't be able to revert this!", icon = 'warning', confirmButtonText = 'Yes, delete it!') {
    try {
        const res = await Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText
        })
        if (res.isConfirmed) {
            return true
        }
        return false
    } catch (error) {
        return false
    }
}

export function toast(title = '') {
    Swal.fire({
        title: title,
        toast: true,
        position: 'top-end',
        timer: 2000,
        timerProgressBar: true
    })
}