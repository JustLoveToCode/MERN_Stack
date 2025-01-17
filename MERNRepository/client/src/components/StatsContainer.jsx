import {FaSuitcaseRolling, FaCalendarCheck, FaBug} from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';

const StatsContainer = ({defaultStats})=>{
    const stats = [
        {title:'Pending Applications',
        count:defaultStats?.pending || 0,
        icon:<FaSuitcaseRolling/>,
        color:'#f59e0b',
        bcg:'#fef3c7'

        },
        {title:'interview scheduled',
            count:defaultStats?.interview || 0,
            icon:<FaCalendarCheck/>,
            color:'#009dff',
            bcg:'#cff5f9'
        },
        {title:'job declined',
            count:defaultStats?.interview || 0,
            icon:<FaCalendarCheck/>,
            color:'#ffffff',
            bcg:'#ff0000'
        },

    ]
    return <Wrapper>
        {stats.map((item)=>{
        return <StatItem key={item.title} {...item}/>
        })}
    </Wrapper>
}

export default StatsContainer;