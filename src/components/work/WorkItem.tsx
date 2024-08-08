type typeProps = {
     item : {
        id: number,
        image: string,
        title: string,
        category: string,
        link?: string,
    }
}

const WorkItem  = (item : typeProps) => {
    const {id, image, title,  link} = item.item
    return (
        <div className="work__card" key={id}>
            <img src={image} alt="" className="work__img" />
            <h3 className="work__title">{title}</h3>
            <a href={link} className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

export default WorkItem;