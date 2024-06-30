import { NextResponse, type NextRequest } from "next/server";

export async function Middleware(req: NextRequest) {
	const response = NextResponse.next();
	const themePreference = req.cookies.get("theme");
	if(!themePreference) {
		response.cookies.set("theme", "dark");
	}
	response.headers.set("custom-theme", "custom-value");
	return response;
	
	// return NextResponse.redirect(new URL("/", req.url))
}

// export const config = {
// 	matcher: "/profile",
// }