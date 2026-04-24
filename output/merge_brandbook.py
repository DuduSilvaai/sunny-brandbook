import os

output_dir = r"c:\Users\edugu\Downloads\sunny-brandbook\output"
files_to_merge = [
    r"c:\Users\edugu\Downloads\sunny-brandbook\output\01-diagnosis\brand-diagnosis.md",
    r"c:\Users\edugu\Downloads\sunny-brandbook\output\02-positioning\positioning-canvas.md",
    r"c:\Users\edugu\Downloads\sunny-brandbook\output\03-naming\naming-verbal-identity.md",
    r"c:\Users\edugu\Downloads\sunny-brandbook\output\04-identity\visual-identity-system.md",
    r"c:\Users\edugu\Downloads\sunny-brandbook\output\brandbook-site\logo-brief.md",
    r"c:\Users\edugu\Downloads\sunny-brandbook\output\05-activation\brand-activation.md"
]

merged_file_path = os.path.join(output_dir, "sunny-brandbook-full.md")

with open(merged_file_path, "w", encoding="utf-8") as outfile:
    outfile.write("# Sunny Brandbook - Contexto Completo para Claude Design\n\n")
    for file_path in files_to_merge:
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as infile:
                outfile.write(infile.read())
                outfile.write("\n\n---\n\n")
        else:
            print(f"Warning: {file_path} not found.")

print(f"Successfully merged into {merged_file_path}")
