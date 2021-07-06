function Home(){
    return (
        <Card 
            bgcolor="info"
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcom to the bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
        />

        
    );
}