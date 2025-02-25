import AppUser from '@/lib/interfaces/AppUser'

let user: AppUser;
const useUser = (): [
    AppUser,
    (user: AppUser) => void
] => {
    return [
        user,
        (newUser: AppUser) => {
            user = newUser
        }
    ] as [
            AppUser,
            (user: AppUser) => void
        ]
}

export default useUser