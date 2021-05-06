const About = () => {
    var myArr = [1, 2, 3, 4];
    return (
        <div>
            {
                myArr.map(i => {
                    return <h1 key={i} className="text-5xl text-red-800" >Page About</h1>
                }
                )
            }
        </div>
    )
}
export default About