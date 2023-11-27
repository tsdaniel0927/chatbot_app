from openai import OpenAI
import time

client = OpenAI()

data_file_path = '/Users/danieltan/Documents/Ubuntu_shared/test_dataset.csv'

try:
    with open(data_file_path, 'rb') as f:
        data_file = client.files.create(file=f, purpose='assistants')

    assistant = client.beta.assistants.create(
        name="Property Assistant",
        description="You are a property assistant. You answer users' question and your answer should based on the system (the csv data file) I provide. If you cannot find a answer in the file, simply ask user to contact the person with contact details in the file. You answer with Mandarin/Simplified Chinese if user uses Chinese to ask you, you answer in English if user is asking in English.",
        model="gpt-4-1106-preview",
        tools=[{"type":"code_interpreter"}, {"type":"retrieval"}],
        file_ids=[data_file.id]
    )

    thread = client.beta.threads.create()
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=" ", ### need to fetech the user input from then frontend
        file_ids=[data_file.id]
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id,
        instructions="Act like a property assistant. Find relevant information from the CSV files provided but do not provide contact from the csv unless user asks. If no direct match, based on your guess and take the most close anwser. If no anwser found, or user question is hard to interprete, provide contact from the csv and sugguest user contact the agent"
    )

    # Polling for the run status
    while True:
        run = client.beta.threads.runs.retrieve(run_id=run.id, thread_id=thread.id)
        if run.status in ['completed', 'failed', 'cancelled']:
            break
        time.sleep(1)  # Wait for 1 second before polling again

    messages = client.beta.threads.messages.list(thread_id=thread.id)
    print(messages)

except Exception as e:
    print(f"An error occurred: {e}")    