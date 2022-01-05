import { StyledSkills } from "./Skills.styled"
const Skills = () => {
    const skills = [
        {
            title: 'javascript',
            logo: '../js-logo.png'
        },
        {
            title: 'typsecript',
            logo: '../ts-logo.png'
        },
        {
            title: 'vue',
            logo: '../vue-logo.png'
        },
        {
            title: 'nuxt',
            logo: '../nuxt-logo.png'
        },
        {
            title: 'quasar',
            logo: '../quasar-logo.png'
        },
        {
            title: 'firebase',
            logo: '../firebase-logo.png'
        },
        {
            title: 'html',
            logo: '../html-logo.png'
        },
        {
            title: 'css',
            logo: '../css-logo.png'
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