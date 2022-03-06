import Card from './Card';

const CardList = ({ robots }) => {
    if(true) {
        throw new Error('NOOOOOO');
    }
    return (
        <>
            { 
                robots.map((user, i) => {
                    return (
                        <Card 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} key={i}
                        />
                    )
                })
            }
        </>
    )
}

export default CardList;