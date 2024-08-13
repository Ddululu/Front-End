function Nav(topics) {
  const lists = [];
  console.log(topics)
  for (const contents of topics) {
    let topic = contents
    console.log(topic)
    lists.push(<li key={topic.id}><a href={`/read/${topic.id}`}>{topic.title}</a></li>);
  }
  return (

    <nav>
      <ol>
        {lists}
      </ol>
    </nav>
  );
}

export default Nav;