function time({time}) {
    console.log(time);
    return (
        <div>
           <h1>{time}</h1>
        </div>
    );
}

export async function getStaticProps(ctx){


    return {
        props:{
            time:new Date().toISOString(),
        },
        revalidate:60
    }
}

export default time;