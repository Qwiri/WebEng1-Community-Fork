// app.METHOD(PATH, HANDLER)

app.get("/", (req, res) => {
    return res.send("Hello World!");
});

app.put("/user", (req, res) => {
    return res.send("Got a PUT request at /user");
});
