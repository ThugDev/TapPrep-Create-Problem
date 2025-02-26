import { TapPerpContent } from '../constants/tapprep-content'

const SignIn = () => {
    const gitLoginURL = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&state=web`

    const handleGitLogin = () => {
        window.open(gitLoginURL, '_self')
    }

    return (
        <div className="w-full h-full flex-center">
            <div className="flex-center flex-col">
                <img src="/assets/image/git_img.png" />
                <div className="flex-center flex-col py-12">
                    <p className="text-2xl font-bold pb-6">로그인해 주세요</p>
                    <p>{TapPerpContent.text1}</p>
                    <p>{TapPerpContent.text2}</p>
                </div>
                <button
                    onClick={handleGitLogin}
                    className="bg-black w-[400px] py-4 rounded-[10px] flex-center gap-x-2 cursor-pointer"
                >
                    <img
                        src="/assets/image/white_git_logo.png"
                        width={24}
                        height={24}
                    />
                    <p className="text-white">깃허브로 로그인하기</p>
                </button>
            </div>
        </div>
    )
}
export default SignIn
