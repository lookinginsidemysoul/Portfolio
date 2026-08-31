from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

OUT = "Pallab Mukherjee profile.pdf"
INK = colors.HexColor("#1d1d1f")
MUTED = colors.HexColor("#5d6673")
ACCENT = colors.HexColor("#3d5afe")
RULE = colors.HexColor("#d9dfea")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=22, leading=25, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="ResumeTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=ACCENT, spaceAfter=5))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4, leading=11, textColor=MUTED, spaceAfter=12))
styles.add(ParagraphStyle(name="Section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=ACCENT, spaceBefore=9, spaceAfter=4, borderColor=RULE, borderWidth=0, borderPadding=0))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["Normal"], fontName="Helvetica", fontSize=8.45, leading=11.6, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Skill", parent=styles["Normal"], fontName="Helvetica", fontSize=8.25, leading=11.2, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.25, leading=12, textColor=INK, spaceAfter=0))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontName="Helvetica", fontSize=8.25, leading=10.5, textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["Normal"], fontName="Helvetica", fontSize=8.25, leading=10.7, textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=1.8))

def p(text, style="BodySmall"):
    return Paragraph(text, styles[style])

def section(title):
    return [Spacer(1, 3), p(title, "Section")]

def job(role, dates, company, bullets):
    items = [p(f"{role} <font color='#5d6673'>{dates}</font>", "Role"), p(company, "Meta")]
    items += [p(f"• {bullet}", "ResumeBullet") for bullet in bullets]
    return KeepTogether(items + [Spacer(1, 3)])

story = [
    p("PALLAB MUKHERJEE", "Name"),
    p("Senior Business Analyst | Enterprise BI, AI Systems &amp; Decision Support", "ResumeTitle"),
    p("Kolkata, India 700101  |  +91 97046 26279  |  pallab.mukherjee1987@gmail.com<br/>linkedin.com/in/pallab-mukherjee  |  lookinginsidemysoul.github.io/Portfolio/", "Contact"),
]
story += section("PROFESSIONAL SUMMARY")
story += [p("Senior Business Analyst with 8+ years of experience across enterprise Business Intelligence, data visualization, and applied AI/ML, specializing in Power BI, Tableau, SQL Server, and Python. Proven track record designing trusted data models and executive dashboards that drive decisions, while building AI-enabled analytics workflows that reduce manual reporting effort. Built a multi-agent SQL assistant that lets business users ask questions in plain language, releasing 3.2 FTEs of reporting capacity. Skilled in leading cross-functional Agile teams, stakeholder engagement, analytics governance, and translating complex datasets into measurable business impact.")]
story += section("KEY SKILLS")
for line in [
    "<b>BI &amp; Visualization:</b> Power BI, Tableau, Qlik Sense, DAX, Executive Dashboard Design, Data Storytelling",
    "<b>Data &amp; AI:</b> SQL Server, Python, R, Predictive Analytics, Machine Learning, Text-to-SQL &amp; Multi-Agent Systems, Prompt Design",
    "<b>Data Architecture &amp; Delivery:</b> Dimensional Modeling, ETL, Data Quality, Data Lineage, Agile/Scrum, Jira, MS Project",
    "<b>Governance &amp; Leadership:</b> Semantic Models, DAX Optimization, Row-Level Security, Stakeholder &amp; C-Suite Reporting, Team Leadership, Mentoring",
]: story.append(p(line, "Skill"))
story += section("PROFESSIONAL EXPERIENCE")
story.append(job("Senior Analyst", "Apr 2024 - Present", "Infosys BPM Limited | Bangalore, India", [
    "Built and deployed a multi-agent SQL assistant enabling business users to ask data questions in plain language; the workflow plans and executes SQL behind the scenes, releasing 3.2 FTEs of manual reporting capacity.",
    "Led a five-person analyst team through Agile planning, resource allocation, and scope definition for data models and dashboards.",
    "Managed end-to-end BI rollouts using Jira and MS Project, maintaining 95% on-time delivery through backlog management, demos, and risk mitigation.",
    "Administered Power BI and Tableau platforms; mentored four BI colleagues in dashboard standards, code reviews, and performance tuning, delivering 20+ dashboards that lifted stakeholder engagement 30%.",
    "Delivered C-suite recommendations on promotional spend and operations that contributed to a 15% quarterly revenue uplift."
]))
story.append(job("Analyst", "Apr 2022 - Mar 2024", "Infosys BPM Limited | Bangalore, India", [
    "Designed data models and documented technical solutions for business requirements and high-impact BI reporting.",
    "Managed Data Virtualization support, handled escalations, and optimized SQL for improved data-access performance.",
    "Supported the AT&T Invoicing Project with BI reporting, automation, and improved invoice reconciliation accuracy."
]))
story.append(job("Associate Analyst", "Apr 2020 - Mar 2022", "Infosys BPM Limited | Bangalore, India", [
    "Developed dashboards and automated reporting with Excel/VBA, Tableau, and Power BI; built early predictive models for business optimization.",
    "Mentored junior analysts and collaborated with UK and US consulting teams."
]))
story.append(job("Senior Process Executive", "Feb 2018 - Mar 2020", "Infosys BPM Limited | Hyderabad, India", [
    "Assured GIS attribute data quality and applied machine-learning models to optimize bot-review workflows."
]))
story.append(job("Earlier experience", "2010 - 2017", "Digital Marketing Intern, IT Info Digital Services | Web Consultant, DK Technologies | Computer Teacher, DAV Public School | Senior Technical Assistant, MCET HRD", [
    "Built and maintained client websites; used digital analytics for marketing reporting; taught programming and web design; supported IT infrastructure and user training."
]))
story += section("EDUCATION, CERTIFICATION & LANGUAGES")
story += [
    p("<b>Bachelor of Arts - History</b> | Krishnath College, University of Kalyani, India | May 2007", "BodySmall"),
    p("<b>Certified Professional Data Science Practitioner</b> | Analytics Path, Hyderabad", "BodySmall"),
    p("English (C1) | Hindi (C1) | Bengali (C2, bilingual/proficient)", "BodySmall"),
]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.line(18*mm, 14*mm, 192*mm, 14*mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18*mm, 9*mm, "Pallab Mukherjee | Enterprise BI, AI Systems & Decision Support")
    canvas.drawRightString(192*mm, 9*mm, f"Page {doc.page}")
    canvas.restoreState()

doc = SimpleDocTemplate(OUT, pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=15*mm, bottomMargin=20*mm)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(f"Created {OUT}")
