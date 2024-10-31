/** @type {import('next').NextConfig} */
const nextConfig = {
	images:{
		remotePatterns:[
			{
				protocol: "https",
				hostname: "asset.vercel.com",
				port: "",
				pathname: "/image/uploads/**"	
			}
		]
	}
};

export default nextConfig;
