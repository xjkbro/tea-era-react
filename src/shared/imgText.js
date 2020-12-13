const ImageText = (imgText) => {
    imgText.map((item) => {
        if (item.id % 2 == 0) {
            return (
                <div
                    className="row row-content align-items-center"
                    key={item.id}
                >
                    <div className="col-6">
                        <div className="media">
                            <img
                                className="d-none d-md-block mr-3 img-thumb"
                                src={item.src}
                                alt={item.title}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center text-md-right">
                            {item.title}
                        </h2>
                        <p className="text-center text-md-right">{item.desc}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    className="row row-content align-items-center"
                    key={item.id}
                >
                    <div className="col-md-6">
                        <h2 className="text-center text-md-left">
                            {item.title}
                        </h2>
                        <p className="text-center text-md-left">{item.desc}</p>
                    </div>
                    <div className="col-6">
                        <div className="media">
                            <img
                                className="d-none d-md-block mr-3 img-thumb"
                                src={item.src}
                                alt={item.title}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    });
};
export default ImageText;
