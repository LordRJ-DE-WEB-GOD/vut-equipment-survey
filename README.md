# VUT Equipment Availability Survey

This version uses the exact 8 Survey Questions from Appendix A of the supplied
VUT Equipment Availability Report.

Questions:
1. How often do you use the campus computer labs?
2. Have you ever been unable to find an open computer during peak hours?
3. How would you rate the Wi-Fi signal strength in your usual study areas?
4. Have you experienced Wi-Fi dropouts or slow connection on campus?
5. Which locations have the weakest Wi-Fi, in your experience?
6. Is the number of computer labs sufficient for student demand?
7. Do lab computers have the software you need for your coursework?
8. What one change would most improve equipment access for you?

The source document identifies these as Appendix A survey questions.
It also says no completed survey responses were supplied, so this website
collects new responses rather than inventing results.

SETUP
1. Create a Supabase project.
2. Run supabase.sql in Supabase SQL Editor.
3. Create your admin user under Authentication → Users.
4. Put your Supabase Project URL and anon/public key into config.js.
5. Host index.html and admin.html with GitHub Pages or another static host.
6. Students use index.html. You use admin.html.

SECURITY
RLS permits public INSERT only. SELECT is restricted to authenticated users.
No service-role key belongs in frontend code.
