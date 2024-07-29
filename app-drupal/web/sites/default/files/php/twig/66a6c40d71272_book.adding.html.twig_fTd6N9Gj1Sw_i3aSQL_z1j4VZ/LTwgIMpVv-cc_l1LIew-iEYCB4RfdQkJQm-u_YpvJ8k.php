<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @help_topics/book.adding.html.twig */
class __TwigTemplate_35e669608b0e9f784a96a8aacfd17035 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 9
        $context["node_add_link_text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            yield t("Add content", array());
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 10
        $context["node_add_link"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getRouteLink($this->sandbox->ensureToStringAllowed(($context["node_add_link_text"] ?? null), 10, $this->source), "node.add_page"));
        // line 11
        $context["configuring_topic"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getTopicLink("book.configuring"));
        // line 12
        yield "<h2>";
        yield t("Goal", array());
        yield "</h2>
<p>";
        // line 13
        yield t("Add a page to an existing book.", array());
        yield "</p>
<h2>";
        // line 14
        yield t("Steps", array());
        yield "</h2>
<ol>
  <li>";
        // line 16
        yield t("In the <em>Manage</em> administrative menu, navigate to <em>Content</em> &gt; <em>@node_add_link</em> &gt; <em>Book page</em>. If you have configured additional content types that can be added to books, you can substitute a different content type for <em>Book page</em>; see @configuring_topic for more information.", array("@node_add_link" => ($context["node_add_link"] ?? null), "@configuring_topic" => ($context["configuring_topic"] ?? null), ));
        yield "</li>
  <li>";
        // line 17
        yield t("Enter a title for the page and some text for the body of the page.", array());
        yield "</li>
  <li>";
        // line 18
        yield t("In the vertical tabs area, click <em>Book Outline</em>. Select the book you want to add the page to in the <em>Book</em> select list. If you want to insert this page into the book hierarchy, also select the desired parent page in the <em>Parent item</em> select list.", array());
        yield "</li>
  <li>";
        // line 19
        yield t("Select the desired weight for the page in the <em>Weight</em> select list (pages with the same parent item are ordered from lowest to highest weight).", array());
        yield "</li>
  <li>";
        // line 20
        yield t("Click <em>Save</em> to add the page to the book.", array());
        yield "</li>
</ol>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@help_topics/book.adding.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  79 => 20,  75 => 19,  71 => 18,  67 => 17,  63 => 16,  58 => 14,  54 => 13,  49 => 12,  47 => 11,  45 => 10,  40 => 9,);
    }

    public function getSourceContext()
    {
        return new Source("", "@help_topics/book.adding.html.twig", "C:\\xampp1\\htdocs\\appChallenge\\app-drupal\\web\\core\\modules\\book\\help_topics\\book.adding.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 9, "trans" => 9);
        static $filters = array("escape" => 16);
        static $functions = array("render_var" => 10, "help_route_link" => 10, "help_topic_link" => 11);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'trans'],
                ['escape'],
                ['render_var', 'help_route_link', 'help_topic_link'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
