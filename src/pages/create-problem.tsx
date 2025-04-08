import CreateProblemForm from '../components/createProblem/create-problem-form'

const CreateProblem = () => {
    return (
        <div className=" w-full h-full flex-center flex-col">
            <div>create problem page</div>
            <div className="h-full overflow-scroll py-12">
                <CreateProblemForm />
            </div>
        </div>
    )
}

export default CreateProblem
