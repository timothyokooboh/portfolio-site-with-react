import { StyledSkills } from "./Skills.styled"
const Skills = () => {
    const skills = [
        {
            title: 'Typsecript',
            logo: '../ts-logo.png'
        },
        {
            title: 'Vue.js',
            logo: '../vue-logo.png'
        },
        {
            title: 'React.js',
            logo: '../react-logo.png'
        },
        {
            title: 'Nuxt.js',
            logo: '../nuxt-logo.png'
        },
        {
            title: 'Next.js',
            logo: '../next-logo.png'
        },
        {
            title: 'Pinia',
            logo: '../pinia-logo.svg'
        },
        {
            title: 'Vuex',
            logo: '../vue-logo.png'
        },
        {
            title: 'Redux',
            logo: '../redux-logo.png'
        },
       
        {
            title: 'Firebase',
            logo: '../firebase-logo.png'
        },
        {
            title: 'HTML',
            logo: '../html-logo.png'
        },
        {
            title: 'CSS',
            logo: '../css-logo.png'
        },
        {
            title: 'SCSS',
            logo: '../scss-logo.png'
        },
        {
            title: 'Chakra-ui',
            logo: '../chakra-logo.png'
        }
    ]
    return ( 
        <StyledSkills>
            <h4>Skills</h4>
            <div className="card">
                <ul>
                    { 
                        skills.map(skill => {
                            return (
                                <li key={ skill.title }>
                                    <img src={skill.logo} alt={skill.title} />
                                    <span>{skill.title}</span>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        </StyledSkills>
    );
}
 
export default Skills;