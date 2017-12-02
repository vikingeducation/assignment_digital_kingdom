<h1 class="text-center">The Kingdom of {{ name }}</h1>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Name of the castle</th>
      <th scope="col">Registry number</th>
      <th scope="col">Number of Lieges</th>
    </tr>
  </thead>
  <tbody>
  {{#each castlesTree }}
    <tr>
      <th scope="row">{{@key}}</th>
      <td>{{this.name}}</td>
      <td>{{{ convertIdsToNames ../kingsTree this.kingId "name" }}}</td>
      <td>{{ this.liegeIds.length }}</td>
    </tr>
  {{/each}}
  </tbody>
</table>

<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm-8">

      <form action="/kingdoms" method="POST">
        <br><br>
        <h3 class="text-center">Create a new kingdom</h3>
        <div class="form-group">
          <input type="text" id="name" name="name" class="form-control" placeholder="Kingom's name">
        </div>

        <div class="center">
          <button type="submit" class="btn btn-primary" method="post">Create</button>
        </div>
      </form>

    </div>
    <div class="col-sm">
    </div>
  </div>
</div>

{{>form name='kingdom' bigName='Kingdom' action='/kingdom'}}
