
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f9fc",
        color: "#111",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1>PaaS Environment Deployed via AWS Amplify</h1>
      <p>My PaaS application is live!</p>
    </main>
  );
}
