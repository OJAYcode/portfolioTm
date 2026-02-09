import dynamic from "next/dynamic";

const PortfolioApp = dynamic(() => import("@/components/PortfolioApp"), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#0a0a0a'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(255,255,255,0.1)',
        borderTop: '3px solid #fff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  ),
});

export default function Home() {
  return <PortfolioApp />;
}
